import React, {createContext, useContext, useRef, useState} from 'react';
import {Modal, TouchableWithoutFeedback, View, Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import styles from './styles';
import {IPosition, IProps, IContext} from './type';

import {AppButton, Icon} from '@app/ui';

export const DropdownContext = createContext<IContext>({} as IContext);

const DropdownPresentation = ({children}: IProps) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [position, setPosition] = useState<IPosition | null>(null);
  const insets = useSafeAreaInsets();
  const buttonRef = useRef<View>(null);
  const dropdownRef = useRef<View>(null);

  const showDropdown = () => {
    buttonRef.current?.measure(
      (_x, _y, widthMore, heightMore, pageXMore, pageYMore) => {
        dropdownRef.current?.measure((_x, _y, widthMenu, heightMenu) => {
          const topMin = pageYMore - insets.top;
          const top =
            heightMenu > topMin
              ? pageYMore
              : pageYMore + heightMore - heightMenu;
          const left = pageXMore + widthMore - widthMenu;
          setPosition({top, left});
        });
      },
    );
    setDropdownVisible(true);
  };

  return (
    <>
      <Modal animationType="fade" transparent={true} visible={dropdownVisible}>
        <Pressable
          style={styles.dropdown}
          onPress={() => setDropdownVisible(false)}>
          <TouchableWithoutFeedback>
            <View
              ref={dropdownRef}
              style={{
                ...styles.body,
                top: position?.top,
                left: position?.left,
              }}>
              <DropdownContext.Provider value={{setDropdownVisible}}>
                {children}
              </DropdownContext.Provider>
            </View>
          </TouchableWithoutFeedback>
        </Pressable>
      </Modal>

      <View style={styles.more} ref={buttonRef}>
        <AppButton
          shape="circle"
          onPress={showDropdown}
          icon={<Icon name="More" />}
        />
      </View>
    </>
  );
};

export default DropdownPresentation;

export const useDropdownPresentation = () => useContext(DropdownContext);
