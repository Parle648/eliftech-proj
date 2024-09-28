import LineBar from '../features/LineBar/LineBar';
import VisitorFilters from '../features/VisitorFilters/VisitorFilters';
import UsersList from '../widgets/UsersList/UsersList';

const VisitPage = () => {
  // const id = new Number(window.location.href.split(':').at(-1));


  return (
    <main>
      <VisitorFilters id={new Number(window.location.href.split(':').slice(-1)[0]) as number} />
      <UsersList id={new Number(window.location.href.split(':').slice(-1)[0]) as number} />
      <LineBar />
    </main>
  );
};

export default VisitPage;
