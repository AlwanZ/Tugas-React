import { ComponentProps, ComponentType } from 'react'
import UserDetailPage from '../../pages/user-detail-page';
import { useLocation } from 'react-router-dom';
import { UserDataType } from '../data-list/constants';

type UserDetailPageProps = ComponentProps<typeof UserDetailPage>;

const withEditUser = (WrappedComponent: ComponentType<UserDetailPageProps>) => {
  const NewComponent = (props: ComponentProps<typeof WrappedComponent>) => {
    const location = useLocation()
    const state = location.state as UserDataType;

    const onSubmit = () => {
      console.log("ini edit")
     }

    return <WrappedComponent {...props} initialValues={state} onSubmit={onSubmit}
    />;
  }

  return NewComponent
}

export default withEditUser