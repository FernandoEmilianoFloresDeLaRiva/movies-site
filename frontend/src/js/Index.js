import { getPopular } from "../services/services/allTypesService.js";

getPopular()
.then((res) => console.log(res.data))
