import LineBar from '../features/LineBar/LineBar';
import VisitorFilters from '../features/VisitorFilters/VisitorFilters';
import UsersList from '../widgets/UsersList/UsersList';

const VisitPage = () => {
  // const id = new Number(window.location.href.split(':').at(-1));
  const id = new Number(window.location.href.split(':').slice(-1)[0]);


  return (
    <main>
      <VisitorFilters id={id} />
      <UsersList id={id} />
      <LineBar />
    </main>
  );
};

export default VisitPage;
