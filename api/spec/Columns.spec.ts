import supertest, { Response, SuperTest, Test } from "supertest";
import { BAD_REQUEST, CREATED, OK } from "http-status-codes";

import app from "@server";
import ColumnDao from "@daos/Column/ColumnDao.mock";
import Column, { IColumn } from "@entities/Column";
import { pErr } from "@shared/functions";
import { paramMissingError } from "@shared/constants";

describe("Columns Routes", () => {
  const columnsPath = "/api/columns";
  const getColumnPath = `${columnsPath}/all`;
  const addColumnPath = `${columnsPath}/add`;
  const updateColumnPath = `${columnsPath}/update`;
  const deleteColumnPath = `${columnsPath}/delete/:id`;

  let agent: SuperTest<Test>;

  beforeAll((done) => {
    agent = supertest.agent(app);
    done();
  });

  describe(`"GET:${getColumnPath}"`, () => {
    it(`should return a JSON object with all the columns and a status code of "${OK}" if the
            request was successful.`, (done) => {
      const columns = [
        new Column({
          columnId: 1,
          boardId: "board1",
          title: "Column 1",
          backgroundColorId: "1",
          timestamp: "Wed Jul 29 2020 16:28:52 GMT+0300",
        }),
        new Column({
          columnId: 2,
          boardId: "board1",
          title: "Column 2",
          backgroundColorId: "2",
          timestamp: "Wed Jul 29 2020 16:28:52 GMT+0300",
        }),
        new Column({
          columnId: 3,
          boardId: "board1",
          title: "Column 3",
          backgroundColorId: "1",
          timestamp: "Wed Jul 29 2020 16:28:52 GMT+0300",
        }),
      ];

      spyOn(ColumnDao.prototype, "getAll").and.returnValue(
        Promise.resolve(columns)
      );

      agent.get(getColumnPath).end((err: Error, res: Response) => {
        pErr(err);
        expect(res.status).toBe(OK);
        // Caste instance-objects to 'Column' objects
        const retColumns = res.body.columns.map((column: IColumn) => {
          return new Column(column);
        });
        expect(retColumns).toEqual(columns);
        expect(res.body.error).toBeUndefined();
        done();
      });
    });

    it(`should return a JSON object containing an error message and a status code of
            "${BAD_REQUEST}" if the request was unsuccessful.`, (done) => {
      const errMsg = "Could not fetch columns.";
      spyOn(ColumnDao.prototype, "getAll").and.throwError(errMsg);

      agent.get(getColumnPath).end((err: Error, res: Response) => {
        pErr(err);
        expect(res.status).toBe(BAD_REQUEST);
        expect(res.body.error).toBe(errMsg);
        done();
      });
    });
  });

  describe(`"POST:${addColumnPath}"`, () => {
    const callApi = (reqBody: object) => {
      return agent.post(addColumnPath).type("form").send(reqBody);
    };

    const columnData = {
      column: new Column({
        columnId: 1,
        boardId: "board1",
        title: "Column 1",
        backgroundColorId: "1",
        timestamp: "Wed Jul 29 2020 16:28:52 GMT+0300",
      }),
    };

    it(`should return a status code of "${CREATED}" if the request was successful.`, (done) => {
      spyOn(ColumnDao.prototype, "add").and.returnValue(Promise.resolve());

      agent
        .post(addColumnPath)
        .type("form")
        .send(columnData) // pick up here
        .end((err: Error, res: Response) => {
          pErr(err);
          expect(res.status).toBe(CREATED);
          expect(res.body.error).toBeUndefined();
          done();
        });
    });

    it(`should return a JSON object with an error message of "${paramMissingError}" and a status
            code of "${BAD_REQUEST}" if the column param was missing.`, (done) => {
      callApi({}).end((err: Error, res: Response) => {
        pErr(err);
        expect(res.status).toBe(BAD_REQUEST);
        expect(res.body.error).toBe(paramMissingError);
        done();
      });
    });

    it(`should return a JSON object with an error message and a status code of "${BAD_REQUEST}"
            if the request was unsuccessful.`, (done) => {
      const errMsg = "Could not add column.";
      spyOn(ColumnDao.prototype, "add").and.throwError(errMsg);

      callApi(columnData).end((err: Error, res: Response) => {
        pErr(err);
        expect(res.status).toBe(BAD_REQUEST);
        expect(res.body.error).toBe(errMsg);
        done();
      });
    });
  });

  describe(`"PUT:${updateColumnPath}"`, () => {
    const callApi = (reqBody: object) => {
      return agent.put(updateColumnPath).type("form").send(reqBody);
    };

    const columnData = {
      column: new Column({
        columnId: 1,
        boardId: "board1",
        title: "Column 1",
        backgroundColorId: "1",
        timestamp: "Wed Jul 29 2020 16:28:52 GMT+0300",
      }),
    };

    it(`should return a status code of "${OK}" if the request was successful.`, (done) => {
      spyOn(ColumnDao.prototype, "update").and.returnValue(Promise.resolve());

      callApi(columnData).end((err: Error, res: Response) => {
        pErr(err);
        expect(res.status).toBe(OK);
        expect(res.body.error).toBeUndefined();
        done();
      });
    });

    it(`should return a JSON object with an error message of "${paramMissingError}" and a
            status code of "${BAD_REQUEST}" if the column param was missing.`, (done) => {
      callApi({}).end((err: Error, res: Response) => {
        pErr(err);
        expect(res.status).toBe(BAD_REQUEST);
        expect(res.body.error).toBe(paramMissingError);
        done();
      });
    });

    it(`should return a JSON object with an error message and a status code of "${BAD_REQUEST}"
            if the request was unsuccessful.`, (done) => {
      const updateErrMsg = "Could not update column.";
      spyOn(ColumnDao.prototype, "update").and.throwError(updateErrMsg);

      callApi(columnData).end((err: Error, res: Response) => {
        pErr(err);
        expect(res.status).toBe(BAD_REQUEST);
        expect(res.body.error).toBe(updateErrMsg);
        done();
      });
    });
  });

  describe(`"DELETE:${deleteColumnPath}"`, () => {
    const callApi = (id: number) => {
      return agent.delete(deleteColumnPath.replace(":id", id.toString()));
    };

    it(`should return a status code of "${OK}" if the request was successful.`, (done) => {
      spyOn(ColumnDao.prototype, "delete").and.returnValue(Promise.resolve());

      callApi(5).end((err: Error, res: Response) => {
        pErr(err);
        expect(res.status).toBe(OK);
        expect(res.body.error).toBeUndefined();
        done();
      });
    });

    it(`should return a JSON object with an error message and a status code of "${BAD_REQUEST}"
            if the request was unsuccessful.`, (done) => {
      const deleteErrMsg = "Could not delete column.";
      spyOn(ColumnDao.prototype, "delete").and.throwError(deleteErrMsg);

      callApi(1).end((err: Error, res: Response) => {
        pErr(err);
        expect(res.status).toBe(BAD_REQUEST);
        expect(res.body.error).toBe(deleteErrMsg);
        done();
      });
    });
  });
});
