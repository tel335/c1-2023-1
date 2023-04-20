import getActiveUsersWithDetailFromDataset from "../../repository/getActiveUsersWithDetailFromDataset";

export default function getActiveUsersWithDetail(ctx) {
    ctx.body = getActiveUsersWithDetailFromDataset(ctx.request.body);
    ctx.status = 200;
}