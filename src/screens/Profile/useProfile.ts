import BottomSheet from "@gorhom/bottom-sheet";
import { useCallback, useContext, useEffect, useMemo, useRef } from "react"
import { CompanyContext } from "../../context/CompanyContext/CompanyContext";
import { useIsFocused } from "@react-navigation/native";

export function useProfile() {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const { company } = useContext(CompanyContext);
    const focus = useIsFocused();

    const snapPoints = useMemo(() => [1, '50%'], []);

    const handleOpenModal = () => {
        bottomSheetRef?.current?.expand();
    };

    const handleCloseModal = () => {
        bottomSheetRef?.current?.close();
    };

    const handleSheetChanges = useCallback((index: number) => {
        if (index === 0) {
            handleCloseModal();
        }
    }, []);


    useEffect(() => {
        if (!focus) {
            handleCloseModal();
        }
    }, [focus])

    return {
        company,
        bottomSheetRef,
        snapPoints,
        handleSheetChanges,
        handleOpenModal,
        handleCloseModal
    }
}