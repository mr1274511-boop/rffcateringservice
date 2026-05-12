import { createActor } from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Order, OrderStatus, PlaceOrderInput } from "../types";

export function usePlaceOrder() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: PlaceOrderInput) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.placeOrder(input) as Promise<Order>;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
}

export function useOrderStatus(orderId: bigint | null) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<OrderStatus | null>({
    queryKey: ["orderStatus", orderId?.toString()],
    queryFn: async () => {
      if (!actor || !orderId) return null;
      return actor.getOrderStatus(orderId) as Promise<OrderStatus | null>;
    },
    enabled: !!actor && !isFetching && orderId !== null,
    refetchInterval: 30000,
  });
}

export function useGetOrder(orderId: bigint | null) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Order | null>({
    queryKey: ["order", orderId?.toString()],
    queryFn: async () => {
      if (!actor || !orderId) return null;
      const orders = await (actor.getAllOrders() as Promise<Order[]>);
      return orders.find((o) => o.orderId === orderId) ?? null;
    },
    enabled: !!actor && !isFetching && orderId !== null,
    refetchInterval: 30000,
  });
}

export function useAllOrders() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Order[]>({
    queryKey: ["orders"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllOrders() as Promise<Order[]>;
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 15000,
  });
}

export function useUpdateOrderStatus() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      orderId,
      status,
    }: { orderId: bigint; status: OrderStatus }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.updateOrderStatus(orderId, status) as Promise<Order | null>;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
}
