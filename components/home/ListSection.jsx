import React from 'react';

const ListSection = ({ title, subTitle, items, ordered }) => {
  const ListTag = ordered ? 'ol' : 'ul';

  return (
    <div className="my-20">
      <h4 className="font-semibold text-base">{title}</h4>
      {subTitle && <h5 className="font-medium text-sm mt-5 mb-8 text-gray-600">{subTitle}</h5>}
      <ListTag className={` ${ordered ? "list-decimal" : "list-disc"}  pl-5 mt-5`}>
        {items.map((item, index) => (
          <li key={index} className="mb-2 text-sm rounded">
            <span className="font-bold">{item.title}</span>: {item.description}
          </li>
        ))}
      </ListTag>
    </div>
  );
};

export default ListSection;