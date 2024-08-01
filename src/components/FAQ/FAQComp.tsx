import { Text, View } from 'react-native';
import FaqTile from './FaqTile';
import { useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

export interface faqData {
    title: string;
    description: string;
}

interface Props {
    data: faqData[];
}

const FAQSection: React.FC<Props> = ({ data }) => {
    const [faqSelect, setFaqSelect] = useState<number | 'ALL' | 'NONE'>('NONE');
    const faqHandler = (titleId: number) => {
        if (titleId === faqSelect) {
            setFaqSelect('NONE');
        } else if (titleId !== faqSelect) {
            setFaqSelect(titleId);
        }
    };
    return (
        <View className="w-full rounded-2xl p-4 bg-[#3C4045]">
            <Text style={{fontSize: RFValue(18)}} className=" text-white font-boldB">
                FAQ
            </Text>

            {data.map((faq, idx) => (
                <FaqTile
                    checker={faqSelect}
                    id={idx}
                    key={idx}
                    title={faq.title}
                    description={faq.description}
                    faqClickHandler={faqHandler}
                />
            ))}
        </View>
    );
};

export default FAQSection