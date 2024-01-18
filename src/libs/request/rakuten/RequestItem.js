import axios from "axios"

const BASE_URL = "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706"
const AFFILIATE_ID = "28baca11.f347d92d.28baca12.5849845e"
const APPLICATION_ID = "1083347612246595223"
const REQUEST_BASE_URL = `${BASE_URL}?format=json&affiliateId=${AFFILIATE_ID}&applicationId=${APPLICATION_ID}`

export default {
    methods: {
        getRakutenItem: async function ({keyword=null, genreId=0, page=1, sort="standard", priceMin=null, priceMax=null}) {
            if (keyword || genreId) {
                let url = `${REQUEST_BASE_URL}&page=${page}&sort=${sort.replace("+", "%2B")}`
                console.log(keyword, genreId)
                if (genreId) {
                    url += `&genreId=${genreId}`
                }
                if (keyword) {
                    url += `&keyword=${keyword}`
                }
                if (priceMin) {
                    url += `&minPrice=${priceMin}`
                }
                if (priceMax) {
                    url += `&maxPrice=${priceMax}`
                }
                console.log(url)
                const response = await axios.get(url)
                return response.data
            }

            // alert("検索ワードを入力してください。")
            return false
        }
    },
};