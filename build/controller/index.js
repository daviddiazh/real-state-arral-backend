"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const service_1 = require("../service");
const router = (0, express_1.Router)();
router.get('/estates', async (req, res) => {
    const resp = await (0, service_1.getEstates)(req.query);
    res.send(resp.data).status(resp.code);
});
exports.default = router;
