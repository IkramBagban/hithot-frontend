import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../../theme/Colors';
import { debounce } from 'lodash';
import axios from 'axios';
import useThemeStyles from '../../hooks/useThemeStyles';

const locationData = [
    {
        name: 'Aurangabad great city',
        distance: '0.7mi',
        address: 'aurangabad, Aurangabad, Maharashtra',
    },
    {
        name: 'Paithan Gate Aurangabad',
        distance: '0.1mi',
        address: '',
    },
    {
        name: 'Nirala Bazar',
        distance: '0.2mi',
        address: 'Nirala Bazar Road, Nirala Bazar',
    },
    {
        name: 'Kranti Chowk',
        distance: '0.5mi',
        address: 'Aurangabad, Maharashtra',
    },
    {
        name: 'RELIABLe Spardha Pariksha Kendra',
        distance: '<0.1mi',
        address: 'Paithan Gate Nirala Bazaar Road Near University',
    },
    {
        name: 'Aurangabad University',
        distance: '0.1mi',
        address: 'aurangabad maharastara',
    },
];

const API_KEY = 'e0b496c322ad48b2846a77905e083c24'; // OpenCage API key if it is not working on your system go visit this site 'https://opencagedata.com/' and generate apikey
const GEOCODE_ENDPOINT = 'https://api.opencagedata.com/geocode/v1/json';

const Location = () => {
    const [input, setInput] = useState<string>('');
    // const [filteredLocations, setFilteredLocations] = useState(locationData);
    const [filteredLocations, setFilteredLocations] = useState(null);
    const { top } = useSafeAreaInsets();

    const styles = useThemeStyles(styleCreator);
    // using geocode api
    useEffect(() => {
        const debouncedFetchLocations = debounce(async (query: string) => {
            if (query.length > 2) {
                // Only fetch data if the query is longer than 2 characters
                try {
                    const response = await axios.get(GEOCODE_ENDPOINT, {
                        params: {
                            q: query,
                            key: API_KEY,
                            limit: 5, // Limit the number of results
                        },
                    });
                    console.log('-----------------------------------------');
                    const locations = response.data.results.map(item => ({
                        name: item.formatted,
                        address: item.formatted,
                        town: item.components.town || '', // Provide default value if town is undefined
                        state_district: item.components.state_district || '', // Provide default value if state_district is undefined
                        country: item.components.country,
                        country_code: item.components.country_code,
                        coords: item.geometry,
                    }));

                    // console.log('location', locations);

                    setFilteredLocations(locations);
                } catch (error) {
                    console.error('Error fetching locations:', error);
                }
            } else {
                setFilteredLocations([]);
            }
        }, 300);

        debouncedFetchLocations(input);
        return () => {
            debouncedFetchLocations.cancel();
        };
    }, [input]);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.locationContainer}
            onPress={() => handleLocationPress(item)}>
            <View>
                <Text style={styles.locationName}>{item.name}</Text>
                <Text style={styles.locationDetails}>{item.address}</Text>
            </View>
        </TouchableOpacity>
    );

    const handleLocationPress = item => {
        console.log('Selected location:', item);
        // navigation.navigate('LocationDetailScreen', { location: item });
    };
    console.log('locations', filteredLocations);
    return (
        <SafeAreaView style={[styles.container, { paddingTop: top }]}>
            <TextInput
                style={styles.input}
                placeholder="Search for a location..."
                value={input}
                onChangeText={setInput}
                placeholderTextColor={Colors.dullWhite}
            />
            {filteredLocations?.length > 0 ? (
                <FlatList
                    data={filteredLocations}
                    renderItem={renderItem}
                    keyExtractor={(item, idx) => Math.random() + idx}
                    contentContainerStyle={styles.listContainer}
                />
            ) : (
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        // justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={styles.searchLocationText}>
                        Search Location
                    </Text>
                </View>
            )}
        </SafeAreaView>
    );
};

const styleCreator = colors =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.bgColor,
        },
        input: {
            borderRadius: 8,
            padding: 10,
            marginVertical: 20,
            fontSize: 16,
            backgroundColor: colors.searchBoxColor,
            color: colors.textColor,
            fontFamily: 'Figtree-Regular',
            marginHorizontal: 10,
        },
        listContainer: {
            paddingHorizontal: 10,
        },
        locationContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            borderRadius: 8,
            borderBottomWidth: 1,
            borderColor: colors.lightTextColor,
        },
        locationName: {
            fontSize: 16,
            color: colors.textColor,
        },
        searchLocationText: { color: colors.lightTextColor, fontSize: 16 },
        locationDetails: {
            fontSize: 14,
            color: colors.textLightColor,
        },
    });

export default Location;
