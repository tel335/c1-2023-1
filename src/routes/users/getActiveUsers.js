import getActiveUsersFromDataset from "../../repository/getActiveUsersFromDataset";

export default function getActiveUsers(ctx) {
    ctx.body = getActiveUsersFromDataset(ctx.request.params.name);
    ctx.status = 200;
}
