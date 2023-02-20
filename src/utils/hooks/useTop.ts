import { useMount } from 'ahooks';
import { useAppDispatch } from '@/src/redux/hooks';

interface propsType {
  setNavShow?: any;
}

const useTop = (props: propsType) => {
  const dispatch = useAppDispatch();
  useMount(() => {
    window.scrollTo(0, 0);
    dispatch(props.setNavShow?.(true));
  });
};

export default useTop;
