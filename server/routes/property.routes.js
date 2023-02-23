import { express } from "express";

import {
  getAllProperties,
  getPropertieDetail,
  createProperty,
  deleteProperty,
  updateProperty,
} from "../controllers/property.controller.js";

const router = express.Router();

router.route("/").get(getAllProperties);
router.route("/").post(createProperty);
router.route("/:id").delete(deleteProperty);
router.route("/:id").patch(updateProperty);
router.route("/:id").get(getPropertieDetail);

export default router;
