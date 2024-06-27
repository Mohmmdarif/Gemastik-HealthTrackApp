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
