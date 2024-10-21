import { getCountriesAndCitiesInfo, getHomePage } from "@controllers";
import { checkToken } from "@middlewares";
import { Router } from "express";

let router: Router = Router();
// router.get("/*", checkToken);
router.get("/", getHomePage.getRegister);
router.post("/", getHomePage.postInfo);

router.get("/verify", checkToken, getHomePage.getVerifyPage);
router.post("/verify", checkToken, getHomePage.getCode);

router.get("/menu", checkToken, getHomePage.getMenuPage);

router.get("/countries", checkToken,getCountriesAndCitiesInfo.getPage )
router.get("/city-edit/:id", checkToken,getCountriesAndCitiesInfo.getEditCity )
router.get("/country-edit/:id", checkToken,getCountriesAndCitiesInfo.getEditCountry )
router.post("/city-edit/:id", checkToken,getCountriesAndCitiesInfo.editDate )

router.post("/country-edit/:id", checkToken,getCountriesAndCitiesInfo.editCountry )


router.get("/cities/delete/:id", checkToken,getCountriesAndCitiesInfo.deleteCity)
router.get("/countries/delete/:id", checkToken,getCountriesAndCitiesInfo.deleteCountry)

router.get("/add-country",  checkToken,getCountriesAndCitiesInfo.getAddCountry)
router.post("/add-country", checkToken, getCountriesAndCitiesInfo.addCountry)

router.get("/add-city/:id", checkToken, getCountriesAndCitiesInfo.getAddCity)
router.post("/add-city/:id", checkToken, getCountriesAndCitiesInfo.addCity)
export default router;
