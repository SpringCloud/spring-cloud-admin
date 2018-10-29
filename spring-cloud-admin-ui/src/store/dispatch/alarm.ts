import store from '../index';
import { AlarmParams } from '@/store/modules/rocketbot/alarm';

export const getAlarm = (alarm:AlarmParams): void => {
  store.dispatch('alarm/GET_ALARM', alarm);
};
