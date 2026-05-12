import AccessControl "mo:caffeineai-authorization/access-control";
import MixinAuthorization "mo:caffeineai-authorization/MixinAuthorization";
import CateringLib "lib/catering";
import CateringApi "mixins/catering-api";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  let cateringState = CateringLib.initState();
  include CateringApi(accessControlState, cateringState);
};
