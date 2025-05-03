import React from 'react';
import { 
  FaChartLine, 
  FaMoneyBillWave, 
  FaClock, 
  FaAward, 
  FaShieldAlt 
} from 'react-icons/fa';

export const Icons = {
  ChartLine: FaChartLine,
  MoneyBill: FaMoneyBillWave,
  Clock: FaClock,
  Award: FaAward,
  Shield: FaShieldAlt,
};

export type IconName = keyof typeof Icons;