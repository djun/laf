///////////////////////////////////////////////////////////////////////
//                                                                   //
// this file is autogenerated by service-generate                    //
// do not edit this file manually                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
/// <reference path = "api-auto.d.ts" />
import request from "@/utils/request";

/**
 * Create a new function
 */
export async function FunctionsControllerCreate(
  params: Definitions.CreateFunctionDto,
  extra?: { [key: string]: any },
): Promise<Paths.FunctionsControllerCreate.Responses> {
  return request("/v1/apps/{appid}/functions", {
    method: "POST",
    data: params,
    ...(extra || {}),
  });
}

/**
 * Query function list of an app
 */
export async function FunctionsControllerFindAll(
  params: Paths.FunctionsControllerFindAll.BodyParameters,
  extra?: { [key: string]: any },
): Promise<Paths.FunctionsControllerFindAll.Responses> {
  return request("/v1/apps/{appid}/functions", {
    method: "GET",
    params: params,
    ...(extra || {}),
  });
}

/**
 * Get a function by its name
 */
export async function FunctionsControllerFindOne(
  params: Paths.FunctionsControllerFindOne.BodyParameters,
  extra?: { [key: string]: any },
): Promise<Paths.FunctionsControllerFindOne.Responses> {
  return request("/v1/apps/{appid}/functions/{name}", {
    method: "GET",
    params: params,
    ...(extra || {}),
  });
}

/**
 * TODO - ⌛️
 */
export async function FunctionsControllerUpdate(
  params: Definitions.UpdateFunctionDto,
  extra?: { [key: string]: any },
): Promise<Paths.FunctionsControllerUpdate.Responses> {
  return request("/v1/apps/{appid}/functions/{id}", {
    method: "PATCH",
    data: params,
    ...(extra || {}),
  });
}

/**
 * TODO - ⌛️
 */
export async function FunctionsControllerRemove(
  params: Paths.FunctionsControllerRemove.BodyParameters,
  extra?: { [key: string]: any },
): Promise<Paths.FunctionsControllerRemove.Responses> {
  return request("/v1/apps/{appid}/functions/{id}", {
    method: "DELETE",
    data: params,
    ...(extra || {}),
  });
}

/**
 * TODO - ⌛️
 */
export async function PoliciesControllerCreate(
  params: Definitions.CreatePolicyDto,
  extra?: { [key: string]: any },
): Promise<Paths.PoliciesControllerCreate.Responses> {
  return request("/v1/apps/{appid}/policies", {
    method: "POST",
    data: params,
    ...(extra || {}),
  });
}

/**
 * TODO - ⌛️
 */
export async function PoliciesControllerFindAll(
  params: Paths.PoliciesControllerFindAll.BodyParameters,
  extra?: { [key: string]: any },
): Promise<Paths.PoliciesControllerFindAll.Responses> {
  return request("/v1/apps/{appid}/policies", {
    method: "GET",
    params: params,
    ...(extra || {}),
  });
}

/**
 * TODO - ⌛️
 */
export async function PoliciesControllerFindOne(
  params: Paths.PoliciesControllerFindOne.BodyParameters,
  extra?: { [key: string]: any },
): Promise<Paths.PoliciesControllerFindOne.Responses> {
  return request("/v1/apps/{appid}/policies/{id}", {
    method: "GET",
    params: params,
    ...(extra || {}),
  });
}

/**
 * TODO - ⌛️
 */
export async function PoliciesControllerUpdate(
  params: Definitions.UpdatePolicyDto,
  extra?: { [key: string]: any },
): Promise<Paths.PoliciesControllerUpdate.Responses> {
  return request("/v1/apps/{appid}/policies/{id}", {
    method: "PATCH",
    data: params,
    ...(extra || {}),
  });
}

/**
 * TODO - ⌛️
 */
export async function PoliciesControllerRemove(
  params: Paths.PoliciesControllerRemove.BodyParameters,
  extra?: { [key: string]: any },
): Promise<Paths.PoliciesControllerRemove.Responses> {
  return request("/v1/apps/{appid}/policies/{id}", {
    method: "DELETE",
    data: params,
    ...(extra || {}),
  });
}

/**
 * Create a new bucket
 */
export async function BucketsControllerCreate(
  params: Definitions.CreateBucketDto,
  extra?: { [key: string]: any },
): Promise<Paths.BucketsControllerCreate.Responses> {
  return request("/v1/apps/{appid}/buckets", {
    method: "POST",
    data: params,
    ...(extra || {}),
  });
}

/**
 * Get bucket list of an app
 */
export async function BucketsControllerFindAll(
  params: Paths.BucketsControllerFindAll.BodyParameters,
  extra?: { [key: string]: any },
): Promise<Paths.BucketsControllerFindAll.Responses> {
  return request("/v1/apps/{appid}/buckets", {
    method: "GET",
    params: params,
    ...(extra || {}),
  });
}

/**
 * Get a bucket by name
 */
export async function BucketsControllerFindOne(
  params: Paths.BucketsControllerFindOne.BodyParameters,
  extra?: { [key: string]: any },
): Promise<Paths.BucketsControllerFindOne.Responses> {
  return request("/v1/apps/{appid}/buckets/{name}", {
    method: "GET",
    params: params,
    ...(extra || {}),
  });
}

/**
 * TODO - ⌛️
 */
export async function BucketsControllerUpdate(
  params: Definitions.UpdateBucketDto,
  extra?: { [key: string]: any },
): Promise<Paths.BucketsControllerUpdate.Responses> {
  return request("/v1/apps/{appid}/buckets/{id}", {
    method: "PATCH",
    data: params,
    ...(extra || {}),
  });
}

/**
 * TODO - ⌛️
 */
export async function BucketsControllerRemove(
  params: Paths.BucketsControllerRemove.BodyParameters,
  extra?: { [key: string]: any },
): Promise<Paths.BucketsControllerRemove.Responses> {
  return request("/v1/apps/{appid}/buckets/{id}", {
    method: "DELETE",
    data: params,
    ...(extra || {}),
  });
}

/**
 * TODO - ⌛️
 */
export async function WebsitesControllerCreate(
  params: Definitions.CreateWebsiteDto,
  extra?: { [key: string]: any },
): Promise<Paths.WebsitesControllerCreate.Responses> {
  return request("/v1/apps/{appid}/websites", {
    method: "POST",
    data: params,
    ...(extra || {}),
  });
}

/**
 * TODO - ⌛️
 */
export async function WebsitesControllerFindAll(
  params: Paths.WebsitesControllerFindAll.BodyParameters,
  extra?: { [key: string]: any },
): Promise<Paths.WebsitesControllerFindAll.Responses> {
  return request("/v1/apps/{appid}/websites", {
    method: "GET",
    params: params,
    ...(extra || {}),
  });
}

/**
 * TODO - ⌛️
 */
export async function WebsitesControllerFindOne(
  params: Paths.WebsitesControllerFindOne.BodyParameters,
  extra?: { [key: string]: any },
): Promise<Paths.WebsitesControllerFindOne.Responses> {
  return request("/v1/apps/{appid}/websites/{id}", {
    method: "GET",
    params: params,
    ...(extra || {}),
  });
}

/**
 * TODO - ⌛️
 */
export async function WebsitesControllerUpdate(
  params: Definitions.UpdateWebsiteDto,
  extra?: { [key: string]: any },
): Promise<Paths.WebsitesControllerUpdate.Responses> {
  return request("/v1/apps/{appid}/websites/{id}", {
    method: "PATCH",
    data: params,
    ...(extra || {}),
  });
}

/**
 * TODO - ⌛️
 */
export async function WebsitesControllerRemove(
  params: Paths.WebsitesControllerRemove.BodyParameters,
  extra?: { [key: string]: any },
): Promise<Paths.WebsitesControllerRemove.Responses> {
  return request("/v1/apps/{appid}/websites/{id}", {
    method: "DELETE",
    data: params,
    ...(extra || {}),
  });
}

/**
 * Create a new collection in database
 */
export async function CollectionsControllerCreate(
  params: Definitions.CreateCollectionDto,
  extra?: { [key: string]: any },
): Promise<Paths.CollectionsControllerCreate.Responses> {
  return request("/v1/apps/{appid}/collections", {
    method: "POST",
    data: params,
    ...(extra || {}),
  });
}

/**
 * Get collection list of an application
 */
export async function CollectionsControllerFindAll(
  params: Paths.CollectionsControllerFindAll.BodyParameters,
  extra?: { [key: string]: any },
): Promise<Paths.CollectionsControllerFindAll.Responses> {
  return request("/v1/apps/{appid}/collections", {
    method: "GET",
    params: params,
    ...(extra || {}),
  });
}

/**
 * Get collection by name
 */
export async function CollectionsControllerFindOne(
  params: Paths.CollectionsControllerFindOne.BodyParameters,
  extra?: { [key: string]: any },
): Promise<Paths.CollectionsControllerFindOne.Responses> {
  return request("/v1/apps/{appid}/collections/{name}", {
    method: "GET",
    params: params,
    ...(extra || {}),
  });
}

/**
 * Update a collection
 */
export async function CollectionsControllerUpdate(
  params: Definitions.UpdateCollectionDto,
  extra?: { [key: string]: any },
): Promise<Paths.CollectionsControllerUpdate.Responses> {
  return request("/v1/apps/{appid}/collections/{name}", {
    method: "PATCH",
    data: params,
    ...(extra || {}),
  });
}

/**
 * Delete a collection by its name
 */
export async function CollectionsControllerRemove(
  params: Paths.CollectionsControllerRemove.BodyParameters,
  extra?: { [key: string]: any },
): Promise<Paths.CollectionsControllerRemove.Responses> {
  return request("/v1/apps/{appid}/collections/{name}", {
    method: "DELETE",
    data: params,
    ...(extra || {}),
  });
}