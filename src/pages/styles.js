import { StyleSheet }  from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#8B10AE',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    card: {
        maxHeight: 320,
        backgroundColor: '#fff',
        zIndex: 5,
        height: '100%',
        marginHorizontal: 20,
        borderRadius: 3,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        top: 0,
        left: 0,
    },
    CardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
    },
    title: {
        fontSize: 13,
        color: '#999',
    },
    description: {
        fontSize: 32,
        marginTop: 32,
        color: '#333',
    },
    CardFooter: {
        paddingHorizontal: 18,
        paddingVertical: 18,
    },
    annotation: {
        color: '#888',
    },
});