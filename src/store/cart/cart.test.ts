import { cartSlice } from "./cart.slice"
// describe('getCounterValue', () => {
//     test('increment', () => {
//         expect(cartSlice.reducer(
//             {items:
//                 [
//                     {   
//                         id: '1',
//                         product: {
//                             id:1,
//                             title:'a',
//                             price:1,
//                             description:'1',
//                             category:'A',
//                             image:'png'
//                         },
//                         quantity: 1
//                     }

//                 ]
//             },cartSlice.actions.increaseQuantity(1))).toEqual(
//             {items:
//                 [
//                     {   
//                         id: '1',
//                         product: {
//                             id:1,
//                             title:'a',
//                             price:1,
//                             description:'1',
//                             category:'A',
//                             image:'png'
//                         },
//                         quantity: 2
//                     }
    
//             ]}
//         )
//     })

//     test('decrement', () => {
//         expect(cartSlice.reducer(
//             {items:
//                 [
//                     {   
//                         id: '1',
//                         product: {
//                             id:1,
//                             title:'a',
//                             price:1,
//                             description:'1',
//                             category:'A',
//                             image:'png'
//                         },
//                         quantity: 10
//                     }

//                 ]
//             },cartSlice.actions.decreaseQuantity(1))).toEqual(
//             {items:
//                 [
//                     {   
//                         id: '1',
//                         product: {
//                             id:1,
//                             title:'a',
//                             price:1,
//                             description:'1',
//                             category:'A',
//                             image:'png'
//                         },
//                         quantity: 9
//                     }
    
//             ]}
//         )
//     })

//     // test('addItem', () => {
//     //     expect(cartSlice.reducer(
//     //         {items:
//     //             [
//     //             ]
//     //         },cartSlice.actions.addItem(
//     //             {
//     //                 id:1,
//     //                 title:'a',
//     //                 price:1,
//     //                 description:'1',
//     //                 category:'A',
//     //                 image:'png'
//     //             }
//     //         ))).toEqual(
//     //         {items:
//     //             [
//     //                 {   
//     //                     id: '1',
//     //                     product: {
//     //                         id:1,
//     //                         title:'a',
//     //                         price:1,
//     //                         description:'1',
//     //                         category:'A',
//     //                         image:'png'
//     //                     },
//     //                     quantity: 9
//     //                 }
    
//     //         ]}
//     //     )
//     // })


//     // test('remove Item', () => {
//     //     expect(cartSlice.reducer(
//     //         {items:
//     //             [
//     //                 {   
//     //                     id: '1',
//     //                     product: {
//     //                         id:1,
//     //                         title:'a',
//     //                         price:1,
//     //                         description:'1',
//     //                         category:'A',
//     //                         image:'png'
//     //                     },
//     //                     quantity: 10
//     //                 }

//     //             ]
//     //         },cartSlice.actions.removeItem(1))).toEqual(
//     //         {items:[]}
//     //     )
//     // })

    

// })