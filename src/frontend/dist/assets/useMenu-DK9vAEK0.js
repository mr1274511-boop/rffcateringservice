import { u as useActor, a as useQuery, b as useMutation, c as createActor } from "./index-BnvbteiL.js";
import { h as useQueryClient } from "./index-DhBLjtS6.js";
function useMenuItems() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["menuItems"],
    queryFn: async () => {
      if (!actor) return [];
      const items = await actor.getMenuItems();
      return items;
    },
    enabled: !!actor && !isFetching
  });
}
function useAddMenuItem() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.addMenuItem(input);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["menuItems"] });
    }
  });
}
function useUpdateMenuItem() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      input
    }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.updateMenuItem(id, input);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["menuItems"] });
    }
  });
}
function useRemoveMenuItem() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.removeMenuItem(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["menuItems"] });
    }
  });
}
export {
  useAddMenuItem as a,
  useUpdateMenuItem as b,
  useRemoveMenuItem as c,
  useMenuItems as u
};
