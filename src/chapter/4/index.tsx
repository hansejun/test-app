import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ToppingOption from './toppingOption';
import { useOrderDetails } from '../../context/OrderDetail';
import AlertBanner from '../../components/AlertBanner';
import ScoopOption from './scoopOption';
import { pricePerItem } from '../../constants';
import { formatCurrency } from '../../utils';
import { OptionCounts } from '../../context/OrderDetail';

interface PropsType {
  optionType: keyof OptionCounts;
}

const Options = ({ optionType }: PropsType) => {
  const [data, setData] = useState<Topping[]>([]);
  const [isError, setIsError] = useState(false);
  const { totals } = useOrderDetails();

  const initData = async (type: string, controller: AbortController) => {
    try {
      // create an abortController to attach to network request

      const response = await axios.get(`/${type}`, {
        signal: controller.signal,
      });
      setData(response.data);
    } catch (e) {
      setIsError(true);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    initData(optionType, controller);
    return () => {
      // abort axios call on component unmount
      controller.abort();
    };
  }, [optionType]);

  const RenderContent = optionType === 'scoops' ? ScoopOption : ToppingOption;
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  if (isError) return <AlertBanner />;

  return (
    <div className="flex-center  flex-col">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p>{formatCurrency(pricePerItem[optionType])} each</p>
      <p>
        {title} total: {formatCurrency(totals[optionType])}
      </p>
      <div className="flex">
        {React.Children.toArray(
          data.map(item => (
            <RenderContent src={item.imagePath} name={item.name} />
          )),
        )}
      </div>
    </div>
  );
};

export default Options;

export type Option = {
  alt: string;
  imagePath: string;
};

export type Topping = {
  name: string;
  imagePath: string;
};
