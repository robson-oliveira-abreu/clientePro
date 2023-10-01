import React from 'react';

import * as S from './styles';
import Animated, { SlideInRight } from 'react-native-reanimated';
import { globalStyles } from '../../../../styles/globalStyles';
import { ClientCardProps } from './types/ClientCardProps';

export function ClientCard({ item, index, navigation }: ClientCardProps) {
    return (
        <Animated.View
            entering={SlideInRight.delay(50 * (index > 10 ? 10 : index))}
        >
            <S.CardCLient
                key={item.id}
                onPress={() => navigation?.navigate('Client', { client: item })}
                style={[globalStyles.shadow_sm]}
            >
                <S.CardCLientTitle>{item.name}</S.CardCLientTitle>
            </S.CardCLient>
        </Animated.View>
    );
}
