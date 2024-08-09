import styled, {css} from '@emotion/native';
import {Typography} from 'dooboo-ui';
import {Stack} from 'expo-router';

import {t} from '../src/STRINGS';
import {FlashList} from '@shopify/flash-list';
import {View} from 'react-native';
import {useEffect, useState} from 'react';

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: ${({theme}) => theme.bg.basic};
`;

const Content = styled.View`
  flex: 1;
`;

const DATA = [
  {title: 'First Item'},
  {title: 'Second Item'},
  {title: 'Third Item'},
  {title: 'Fourth Item'},
  {title: 'Fifth Item'},
  {title: 'Sixth Item'},
  {title: 'Seventh Item'},
  {title: 'Eighth Item'},
  {title: 'Ninth Item'},
  {title: 'Tenth Item'},
  {title: 'Eleventh Item'},
  {title: 'Twelfth Item'},
  {title: 'Thirteenth Item'},
  {title: 'Fourteenth Item'},
  {title: 'Fifteenth Item'},
  {title: 'Sixteenth Item'},
  {title: 'Seventeenth Item'},
  {title: 'Eighteenth Item'},
  {title: 'Nineteenth Item'},
  {title: 'Twentieth Item'},
  {title: 'Twenty-First Item'},
  {title: 'Twenty-Second Item'},
  {title: 'Twenty-Third Item'},
  {title: 'Twenty-Fourth Item'},
  {title: 'Twenty-Fifth Item'},
  {title: 'Twenty-Sixth Item'},
  {title: 'Twenty-Seventh Item'},
  {title: 'Twenty-Eighth Item'},
  {title: 'Twenty-Ninth Item'},
  {title: 'Thirtieth Item'},
];

export default function Details(): JSX.Element {
  const [data, setData] = useState(DATA);

  useEffect(() => {
    setTimeout(() => {
      setData(DATA.concat(DATA));
    }, 1000);
  }, []);

  return (
    <Container>
      <Stack.Screen
        options={{
          title: t('DETAILS'),
        }}
      />
      <Content>
        <FlashList
          data={data}
          keyExtractor={(item) => item.title}
          renderItem={({item}) => (
            <View
              style={css`
                padding: 16px;
              `}
            >
              <Typography.Body2>{item.title}</Typography.Body2>
            </View>
          )}
          estimatedItemSize={10}
        />
      </Content>
    </Container>
  );
}
