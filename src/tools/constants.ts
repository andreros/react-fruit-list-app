// ---------------------------------------------------------
// Fruit list data - Do NOT change anything below this line.
// ---------------------------------------------------------

const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
const colors = ['navy', 'blue', 'aqua', 'teal', 'olive', 'green', 'lime', 'yellow', 'orange', 'red', 'maroon', 'fuchsia', 'purple', 'silver', 'gray', 'black'];
const fruits = ['apple', 'banana', 'watermelon', 'orange', 'peach', 'tangerine', 'pear', 'kiwi', 'mango', 'pineapple'];

export type TItem = {
    name: string;
    color: string;
}

export const items: TItem[] = sizes.reduce(
  (items: TItem[], size) => [
    ...items,
    ...fruits.reduce(
      (acc: TItem[], fruit) => [
        ...acc,
        ...colors.reduce(
          (acc: TItem[], color) => [
            ...acc,
            {
              name: `${size} ${color} ${fruit}`,
              color,
            },
          ],
          [],
        ),
      ],
      [],
    ),
  ],
  [],
);
