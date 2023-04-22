import Tigris from "..";
import nock from "nock";

describe("Database collections", () => {
  test("listCollections", async () => {
    const tigrisClient = new Tigris({});
    const projectName = "test";
    const expectedResult = {
      collections: [
        {
          collection: "instances",
        },
        {
          collection: "invitations",
        },
        {
          collection: "refresh_tokens",
        },
        {
          collection: "users",
        },
        {
          collection: "audit_log_entries",
        },
      ],
    };

    const scope = nock(tigrisClient.baseUrl)
      .get(
        `/${tigrisClient.version}/projects/${projectName}/database/collections`
      )
      .reply(200, expectedResult);

    const response = await tigrisClient.listCollections(projectName);

    expect(response).toEqual(expectedResult);
    scope.done();
  });
});
