const express = require('express');
const router = express.Router();
const reportRepository = require('../Repository/reportRepository');
const app = express();

router.get("/", async (req, res) => {
    try {
        const x = await reportRepository.getAllCandidates();
        res.send(x);
    } catch (e) {
        console.log(e);
    }
});

// get Candidate by id
router.get("/:id", async (req, res) => {
    try {
        const x = await reportRepository.getCandidateById(req.params.id);
        console.log(req.params.id);
        res.send(x);
        console.log(x);
    }
    catch (e) {
        console.log(e);
    }

});

router.put("/upDate", isDevelopment ? cors() : nothing(), async (req, res) => {
    console.log(req.body);
    console.log(req.body.id + "idd");
    const isAllOK = await Repositorycourses.updateCandidate(req.body.id, req.body);
    console.log("inside /upDate/:id isAllOK= " + isAllOK);
    if (isAllOK === true) {
        res.send("successfully updated user");
    }
    else {
        res.send("unsuccessful to update ");
    }
});

module.exports = router;