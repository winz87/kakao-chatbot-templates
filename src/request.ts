export class ChatbotRequest {
  constructor(public requestBody: Record<string, any>) {}

  get bot() {
    return this?.requestBody?.bot;
  }

  get botId() {
    return this?.bot?.id;
  }

  get botIdOrigin() {
    return this?.bot?.id.replace('!', '');
  }

  get userRequest() {
    return this?.requestBody?.userRequest;
  }

  get callbackUrl() {
    return this?.userRequest?.callbackUrl;
  }

  get utterance() {
    return this?.userRequest?.utterance;
  }

  get intent() {
    return this?.requestBody?.intent;
  }

  get action() {
    return this?.requestBody?.action;
  }

  get params() {
    return this?.action?.params;
  }

  get detailParams() {
    return this?.action?.detailParams;
  }

  get createdAt() {
    return this?.clientExtra?.createdAt;
  }

  getParamByKey(key: string) {
    return this.params[key];
  }
  getDetailParamOriginByKey(key: string) {
    return this.detailParams[key]?.origin;
  }

  get verificationValue() {
    return this?.requestBody?.value?.origin;
  }

  get skillIntentCode() {
    return this.getParamByKey('skillIntentCode');
  }

  get clientExtra() {
    return this.action.clientExtra;
  }

  getClientExtraDataByKey(key: string) {
    return this?.clientExtra?.data[key];
  }

  get contexts() {
    return this?.requestBody?.contexts;
  }

  get block() {
    return this?.userRequest?.block;
  }

  get blockId() {
    return this?.block?.id;
  }

  get blockName() {
    return this?.block.name;
  }

  /*
    User Info
  */

  get user() {
    return this?.userRequest.user;
  }

  get userProperties() {
    return this?.user?.properties;
  }

  get botUserKey() {
    return this?.userProperties?.botUserKey;
  }

  get isFriend() {
    return this?.userProperties?.isFriend;
  }

  get accountId() {
    return this?.userProperties?.accountId;
  }

  get plusfriendUserKey() {
    return this?.userProperties?.plusfriendUserKey;
  }

  get talkUserId() {
    return this?.userProperties?.talkUserId;
  }

  get appUserId() {
    return this?.userProperties?.appUserId;
  }
}
