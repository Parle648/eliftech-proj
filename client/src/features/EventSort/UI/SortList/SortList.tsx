import { FC } from 'react';
import { IOption, sortOptions } from '../../../../shared/const/sortOptions';
import updateSort from '../../helpers/updateSorts';

const Option: FC<IOption> = (option) => {
  function changeSorts(event: React.MouseEvent<HTMLOptionElement>) {
    const name = event.currentTarget.dataset.name,
      value = event.currentTarget.value;

    updateSort({ name: name, value: +value });
  }

  return (
    <option onClick={changeSorts} data-name={option.name} value={option.value}>
      {option.description}
    </option>
  );
};

const OptionsList: FC = () => {
  return (
    <select>
      {sortOptions.map((option) => {
        return (
          <Option
            name={option.name}
            value={option.value}
            description={option.description}
          />
        );
      })}
    </select>
  );
};

export default OptionsList;
