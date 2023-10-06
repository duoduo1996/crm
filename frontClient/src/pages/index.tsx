import styles from './index.less';
import Avatar from '@/components/avatar';
import defaultAvator from '@/public/defaultAvator.svg';

export default function IndexPage() {
  return (
    <div>
      <Avatar src={defaultAvator} alt="User Avatar" size={150}/>
    </div>
  );
}
