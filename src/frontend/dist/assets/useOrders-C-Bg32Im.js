import { u as useActor, b as useMutation, a as useQuery, c as createActor } from "./index-BnvbteiL.js";
import { h as useQueryClient } from "./index-DhBLjtS6.js";
function usePlaceOrder() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.placeOrder(input);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    }
  });
}
function useOrderStatus(orderId) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["orderStatus", orderId == null ? void 0 : orderId.toString()],
    queryFn: async () => {
      if (!actor || !orderId) return null;
      return actor.getOrderStatus(orderId);
    },
    enabled: !!actor && !isFetching && orderId !== null,
    refetchInterval: 3e4
  });
}
function useGetOrder(orderId) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["order", orderId == null ? void 0 : orderId.toString()],
    queryFn: async () => {
      if (!actor || !orderId) return null;
      const orders = await actor.getAllOrders();
      return orders.find((o) => o.orderId === orderId) ?? null;
    },
    enabled: !!actor && !isFetching && orderId !== null,
    refetchInterval: 3e4
  });
}
function useAllOrders() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllOrders();
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 15e3
  });
}
function useUpdateOrderStatus() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      orderId,
      status
    }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.updateOrderStatus(orderId, status);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    }
  });
}
export {
  useGetOrder as a,
  useOrderStatus as b,
  useAllOrders as c,
  useUpdateOrderStatus as d,
  usePlaceOrder as u
};
