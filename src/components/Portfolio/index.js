import React from 'react';
import Pages from '../Pages';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio(props) {
  const { currentTab } = props;
  return (
    <section>
      <h3 data-testid="h3tag">{capitalizeFirstLetter(currentTab.name)}</h3>
      <p>{currentTab.description}</p>
      <Pages category={currentTab.name} />
    </section>
  );
}
export default Portfolio;
