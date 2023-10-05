type Props = {
  categories: string[];
  selected: string;
  onclick: (category: string) => void;
};

export default function Categories({ categories, selected, onclick }: Props) {
  return (
    <section className="text-center p-4">
      <h2 className="text-lg font-bold border-b border-sky-500 mb-2">
        Category
      </h2>
      <ul className="flex flex-col items-center">
        {categories.map((category) => (
          <li
            className={`cursor-pointer hover:text-sky-500 transition-all ${
              category === selected && "text-sky-600"
            }`}
            key={category}
            onClick={() => onclick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
