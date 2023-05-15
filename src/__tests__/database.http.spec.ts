import nock from "nock";
import { Tigris } from "../../dist/tigris";
import { Database } from "../../dist/database/database.interface";

describe("Database", () => {
  let tigrisClient: Tigris;
  let db: Database;

  beforeEach(async () => {
    tigrisClient = new Tigris({
      serverUrl: "http://localhost:8081",
      projectName: "test",
    });
    await tigrisClient.initialize();
    await tigrisClient.getDatabase().initializeBranch();
    db = tigrisClient.getDatabase();
  });

  it("listCollections", async () => {
    const collectionResponse = {
      collections: [
        {
          collection: "collection1",
          metadata: {
            version: 1,
          },
        },
        {
          collection: "collection2",
        },
      ],
    };
    nock("http://localhost:8081")
      .get("/v1/projects/test/database/collections")
      .query({
        branch: "main",
      })
      .reply(200, collectionResponse);
    const results = await tigrisClient.getDatabase().listCollections();
    expect(results).toEqual(collectionResponse);
  });

  it("createBranch", async () => {
    const branch = "stage";
    nock("http://localhost:8081")
      .post(`/v1/projects/test/database/branches/${branch}/create`)
      .reply(201, {
        status: "created",
      });
    const results = await db.createBranch(branch);
    expect(results).toEqual({
      status: "created",
    });
  });

  it("createBranch_already_exists", async () => {
    const branch = "stage";
    const tigrisError = {
      error: {
        code: "ALREADY_EXISTS",
        message: "branch already exist 'stage'",
      },
    };
    nock("http://localhost:8081")
      .post(`/v1/projects/test/database/branches/${branch}/create`)
      .reply(409, tigrisError);
    try {
      await db.createBranch(branch);
    } catch (error) {
      expect(error).toEqual(tigrisError);
    }
  });

  it("deleteBranch", async () => {
    const branch = "stage";
    nock("http://localhost:8081")
      .delete(`/v1/projects/test/database/branches/${branch}/delete`)
      .reply(200, {
        status: "deleted",
      });
    const response = await db.deleteBranch(branch);
    expect(response).toEqual({
      status: "deleted",
    });
  });
});
