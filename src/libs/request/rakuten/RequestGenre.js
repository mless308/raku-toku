import axios from "axios"

const BASE_URL = "https://app.rakuten.co.jp/services/api/IchibaGenre/Search/20140222"
const AFFILIATE_ID = "28baca11.f347d92d.28baca12.5849845e"
const APPLICATION_ID = "1083347612246595223"
const REQUEST_BASE_URL = `${BASE_URL}?format=json&affiliateId=${AFFILIATE_ID}&applicationId=${APPLICATION_ID}`

export default {
    methods: {
        getRakutenGenreId: async function (genreId=0) {
            const url = `${REQUEST_BASE_URL}&genreId=${genreId}`
            const response = await axios.get(url)
            return response.data
        }
    },
};