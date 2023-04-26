import { useProfile } from '@/hooks/useProfile';
import { UserService } from '@/services/user.service';
import React, {FC} from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const FavoriteButton: FC<{productId: number}> = ({productId}) => {

    const {profile} = useProfile()
    const {invalidateQueries} = useQueryClient()
    const {mutate} = useMutation(['toggle favorite'], () => UserService.toggleFavorite(productId), {
        onSuccess() {
            invalidateQueries(['get profile'])
        }
    })
    // const isExists = profile.favorites.some(
    //     favorite => favorite.id === productId
    // )


 
    return (
        <div>
            <button
                onClick={() => 
                    mutate()
                }
            >

                {/* {isExists ? <div>red</div> : <div>white</div>} */}

            </button>
        </div>
    );
};

export default FavoriteButton;