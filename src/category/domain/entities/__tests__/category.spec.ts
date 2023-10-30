import { omit } from "lodash";
import { validate as uuidValidate } from "uuid";
import { Category, CategoryProperties } from "../category";

describe("Category Unit Tests", () => {
  test("constructor of category", () => {
    let category = new Category({ name: "Movie" });

    let props = omit(category.props, "created_at");
    expect(props).toStrictEqual({
      name: "Movie",
      description: null,
      is_active: true,
    });
    expect(category.props.created_at).toBeInstanceOf(Date);

    let created_at = new Date(); //string
    category = new Category({
      name: "Movie",
      description: "some description",
      is_active: false,
      created_at,
    });

    expect(category.props).toStrictEqual({
      name: "Movie",
      description: "some description",
      is_active: false,
      created_at,
    });

    category = new Category({
      name: "Movie",
      description: "other description",
    });

    expect(category.props).toMatchObject({
      name: "Movie",
      description: "other description",
    });

    category = new Category({
      name: "Movie",
      is_active: true,
    });

    expect(category.props).toMatchObject({
      name: "Movie",
      is_active: true,
    });

    created_at = new Date();
    category = new Category({
      name: "Movie",
      created_at,
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      created_at,
    });

    expect(category.name).toBe("Movie");
    expect(category.is_active).toBeTruthy();
    expect(category.created_at).toBe(created_at);
  });

  describe("id field", () => {
    type CategoryData = { props: CategoryProperties; id?: string };

    const arrange: CategoryData[] = [
      { props: { name: "Movie" } },
      { props: { name: "Movie" }, id: null },
      { props: { name: "Movie" }, id: undefined },
      { props: { name: "Movie" }, id: "f20bf9da-20d0-4cc0-95c5-620bc193c395" },
    ];

    test.each(arrange)("when props is %j", (item) => {
      const category = new Category(item.props, item.id as any);
      expect(category.id).not.toBeNull();
      expect(uuidValidate(category.id)).toBeTruthy();
    });
  });

  test("getter and setter of is_active prop", () => {
    let category = new Category({
      name: "Movie",
    });
    expect(category.is_active).toBeTruthy();

    category = new Category({
      name: "Movie",
      is_active: true,
    });
    expect(category.is_active).toBeTruthy();

    category = new Category({
      name: "Movie",
      is_active: false,
    });
    expect(category.is_active).toBeFalsy();
  });

  test("getter of created_at prop", () => {
    let category = new Category({
      name: "Movie",
    });

    expect(category.created_at).toBeInstanceOf(Date);

    let created_at = new Date();
    category = new Category({
      name: "Movie",
      created_at,
    });
    expect(category.created_at).toBe(created_at);
  });
});
