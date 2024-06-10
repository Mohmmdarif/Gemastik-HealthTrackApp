// import { View, Text } from 'react-native'
// import React, { useMemo } from 'react'
// import BottomSheet from '@gorhom/bottom-sheet';
// import { Box, Button } from 'native-base';
// import { components } from '../../constants';


// const BottomSheetComp = () => {
//   const snapPoints = useMemo(() => ['5%', '15%', '25%', '50%', '60%'], []);

//   return (
//     <BottomSheet snapPoints={snapPoints} index={4} className="w-full bg-black">
//       <View className="p-4 ">
//         <Box w="100%" maxWidth="full">

//           {/* Input Poli */}
//           <components.SelectInput title="Poli" />

//           {/* Input Penyakit yang diobati */}
//           <components.SelectInput title="Penyakit yang diobati" style="mt-3" />

//           {/* Input Keterangan (optional) */}
//           <components.TextareaInput title="Keterangan" style="mt-3" />

//           {/* Input situasi */}
//           <components.RadioInput title="Situasi" style="mt-3" />

//           {/* Button */}
//           <Button className="bg-primary h-[44px] mt-8 rounded-xl" block>
//             <Text className="text-white font-psemibold text-lg">Cari</Text>
//           </Button>
//         </Box>
//       </View>
//     </BottomSheet>
//   )
// }

// export default BottomSheetComp

import React, { useMemo, forwardRef, useImperativeHandle } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { Box, ScrollView } from 'native-base';

const BottomSheetComp = forwardRef((props, ref) => {
  const { snapPoints, content, initialSnapPoint = 0 } = props;
  const bottomSheetRef = React.useRef(null);

  useImperativeHandle(ref, () => ({
    open: () => bottomSheetRef.current.snapToIndex(initialSnapPoint),
    close: () => bottomSheetRef.current.close(),
  }));

  const memoizedSnapPoints = useMemo(() => snapPoints, [snapPoints]);

  return (
    <BottomSheet ref={bottomSheetRef} index={1} snapPoints={memoizedSnapPoints}>
      <ScrollView p={4} bg="white" style={{ height: '100%' }}>
        {content}
      </ScrollView>
    </BottomSheet>
  );
});

export default BottomSheetComp;
