import { Request, Response, Router } from "express";
import { BAD_REQUEST, CREATED, OK } from "http-status-codes";
import { ParamsDictionary } from "express-serve-static-core";
import { paramMissingError } from "@shared/constants";
import CardDao from "@daos/Card/CardDao";

// Init shared
const router = Router();
const cardDao = new CardDao();

/** ****************************************************************************
 *                      Get All Columns - "GET /api/columns/all"
 ***************************************************************************** */

router.get("/all", async (req: Request, res: Response) => {
    const cards = await cardDao.getAll();
    return res.status(OK).json({ cards });
});

/** ****************************************************************************
 *                       Add One - "POST /api/columns/add"
 ***************************************************************************** */

router.post("/add", async (req: Request, res: Response) => {
    const { column } = req.body;
    if (!column) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    await cardDao.add(column);
    return res.status(CREATED).end();
});

/** ****************************************************************************
 *                       Update - "PUT /api/columns/update"
 ***************************************************************************** */

router.put("/update", async (req: Request, res: Response) => {
    const { column } = req.body;
    if (!column) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    column.columnId = Number(column.columnId);
    await cardDao.update(column);
    return res.status(OK).end();
});

/** ****************************************************************************
 *                    Delete - "DELETE /api/columns/delete/:id"
 ***************************************************************************** */

router.delete("/delete/:id", async (req: Request, res: Response) => {
    const { id } = req.params as ParamsDictionary;
    await cardDao.delete(Number(id));
    return res.status(OK).end();
});

/** ****************************************************************************
 *                                     Export
 ***************************************************************************** */

export default router;
