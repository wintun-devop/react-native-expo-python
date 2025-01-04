import * as Device from 'expo-device';

export const fetchDeviceId = () => {
    const id = Device.osBuildId || "Unknown";
    return id;
};