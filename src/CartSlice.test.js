import { describe, expect, it } from "vitest";
import cartReducer, { addItem, removeItem, updateQuantity } from "./CartSlice";

const samplePlant = {
  id: "air-snake-plant",
  name: "Snake Plant",
  image: "https://example.com/snake.jpg",
  price: 15,
};

describe("cart reducer", () => {
  it("adds a new item to the cart", () => {
    const state = cartReducer(undefined, addItem(samplePlant));
    expect(state.items).toHaveLength(1);
    expect(state.items[0]).toMatchObject({
      id: "air-snake-plant",
      quantity: 1,
      price: 15,
    });
  });

  it("increments quantity when adding the same item id", () => {
    const initial = {
      items: [{ ...samplePlant, quantity: 1 }],
    };
    const state = cartReducer(initial, addItem(samplePlant));
    expect(state.items).toHaveLength(1);
    expect(state.items[0].quantity).toBe(2);
  });

  it("keeps two products with same name but different ids", () => {
    const initial = {
      items: [{ ...samplePlant, quantity: 1 }],
    };
    const sameNameDifferentId = {
      ...samplePlant,
      id: "low-snake-plant",
    };
    const state = cartReducer(initial, addItem(sameNameDifferentId));
    expect(state.items).toHaveLength(2);
  });

  it("removes an item when quantity is set to zero", () => {
    const initial = {
      items: [{ ...samplePlant, quantity: 1 }],
    };
    const state = cartReducer(
      initial,
      updateQuantity({ id: samplePlant.id, quantity: 0 }),
    );
    expect(state.items).toHaveLength(0);
  });

  it("removes an item by id", () => {
    const initial = {
      items: [{ ...samplePlant, quantity: 2 }],
    };
    const state = cartReducer(initial, removeItem(samplePlant.id));
    expect(state.items).toHaveLength(0);
  });
});
