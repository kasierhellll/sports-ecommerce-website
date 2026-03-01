import { 
    Button, IconButton, LinearProgress, Pagination, Rating, 
    Stack, TextField, Typography, useMediaQuery 
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    createReviewAsync, resetReviewAddStatus, resetReviewDeleteStatus, 
    resetReviewUpdateStatus, selectReviewAddStatus, selectReviewDeleteStatus, 
    selectReviewStatus, selectReviewUpdateStatus, selectReviews 
} from '../ReviewSlice';
import { ReviewItem } from './ReviewItem';
import { LoadingButton } from '@mui/lab';
import { useForm } from 'react-hook-form';
import { selectLoggedInUser } from '../../auth/AuthSlice';
import { toast } from 'react-toastify';
import CreateIcon from '@mui/icons-material/Create';
import { MotionConfig, motion } from 'framer-motion';
import { useTheme } from '@mui/material';

export const Reviews = ({ productId, averageRating }) => {

    const dispatch = useDispatch();
    const reviews = useSelector(selectReviews);
    const [value, setValue] = useState(1);
    const { register, handleSubmit, reset, formState: { errors }} = useForm();
    const loggedInUser = useSelector(selectLoggedInUser);
    const reviewStatus = useSelector(selectReviewStatus);

    const reviewAddStatus = useSelector(selectReviewAddStatus);
    const reviewDeleteStatus = useSelector(selectReviewDeleteStatus);
    const reviewUpdateStatus = useSelector(selectReviewUpdateStatus);

    const [writeReview, setWriteReview] = useState(false);
    const theme = useTheme();
    const is840 = useMediaQuery(theme.breakpoints.down(840));
    const is480 = useMediaQuery(theme.breakpoints.down(480));

    // --- Toast & Reset ---
    useEffect(() => {
        if (reviewAddStatus === 'fulfilled') toast.success("Đã thêm đánh giá");
        else if (reviewAddStatus === 'rejected') toast.error("Lỗi khi đăng đánh giá, vui lòng thử lại sau");
        reset();
        setValue(1);
    }, [reviewAddStatus]);

    useEffect(() => {
        if (reviewDeleteStatus === 'fulfilled') toast.success("Đã xóa đánh giá");
        else if (reviewDeleteStatus === 'rejected') toast.error("Lỗi khi xóa đánh giá, vui lòng thử lại sau");
    }, [reviewDeleteStatus]);

    useEffect(() => {
        if (reviewUpdateStatus === 'fulfilled') toast.success("Đã cập nhật đánh giá");
        else if (reviewUpdateStatus === 'rejected') toast.error("Lỗi khi cập nhật đánh giá, vui lòng thử lại sau");
    }, [reviewUpdateStatus]);

    useEffect(() => {
        return () => {
            dispatch(resetReviewAddStatus());
            dispatch(resetReviewDeleteStatus());
            dispatch(resetReviewUpdateStatus());
        };
    }, []);


    // ----------------------
    //     THỐNG KÊ ĐÁNH GIÁ
    // ----------------------
    const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

    reviews?.forEach((review) => {
        if (review?.rating) {
            ratingCounts[review.rating] += 1;
        }
    });


    // ----------------------
    //     THÊM ĐÁNH GIÁ
    // ----------------------
    const handleAddReview = (data) => {
        const review = {
            ...data,
            rating: value,
            user: loggedInUser?._id,
            product: productId
        };

        dispatch(createReviewAsync(review));
        setWriteReview(false);
    };


    return (
        <Stack rowGap={5} alignSelf={"flex-start"} width={is480 ? "90vw" : is840 ? "25rem" : '40rem'}>

            {/* --- TÓM TẮT --- */}
            <Stack>
                <Typography gutterBottom variant='h4' fontWeight={400}>Đánh giá</Typography>

                {reviews?.length ? (
                    <Stack rowGap={3}>
                        <Stack rowGap={1}>
                            <Typography variant='h2' fontWeight={800}>{averageRating}.0</Typography>
                            <Rating readOnly value={averageRating} />
                            <Typography variant='h6' color={'text.secondary'}>
                                Dựa trên {reviews.length} {reviews.length === 1 ? "đánh giá" : "đánh giá"}
                            </Typography>
                        </Stack>

                        {/* THỐNG KÊ SAO */}
                        <Stack rowGap={2}>
                            {[5,4,3,2,1].map((number) => (
                                <Stack key={number} flexDirection='row' justifyContent='space-between' alignItems='center' columnGap={1}>
                                    <Typography sx={{ whiteSpace: "nowrap" }}>{number} sao</Typography>

                                    <LinearProgress 
                                        sx={{ width:"100%", height:"1rem", borderRadius:"4px" }}
                                        variant='determinate'
                                        value={reviews.length ? (ratingCounts[number] / reviews.length) * 100 : 0}
                                    />

                                    <Typography>
                                        {reviews.length ? parseInt((ratingCounts[number] / reviews.length) * 100) : 0}%
                                    </Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Stack>
                ) : (
                    <Typography variant='h6' color='text.secondary'>
                        {loggedInUser?.isAdmin ? "Hiện tại chưa có đánh giá nào" : "Hãy là người đầu tiên đánh giá sản phẩm"}
                    </Typography>
                )}
            </Stack>

            {/* --- DANH SÁCH ĐÁNH GIÁ --- */}
            <Stack rowGap={2}>
                {reviews?.map((review) => {
                    const userId = review.user?._id || "";
                    const username = review.user?.name || "Người dùng";

                    return (
                        <ReviewItem 
                            key={review._id}
                            id={review._id}
                            userid={userId}
                            comment={review.comment}
                            createdAt={review.createdAt}
                            rating={review.rating}
                            username={username}
                        />
                    );
                })}
            </Stack>


            {/* --- FORM THÊM ĐÁNH GIÁ --- */}
            {writeReview ? (
                <Stack rowGap={3} component='form' noValidate onSubmit={handleSubmit(handleAddReview)}>

                    <TextField
                        {...register("comment", { required: true })}
                        sx={{ mt: 4, width: is840 ? "100%" : "40rem" }}
                        multiline
                        rows={6}
                        placeholder='Viết đánh giá của bạn...'
                        fullWidth
                    />

                    <Stack>
                        <Typography gutterBottom variant='body2'>Bạn đánh giá sản phẩm bao nhiêu sao?</Typography>
                        <motion.div style={{ width:"fit-content" }} whileHover={{ scale:1.05 }} whileTap={{ scale:1 }}>
                            <Rating size='large' value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
                        </motion.div>
                    </Stack>

                    <Stack flexDirection='row' alignSelf='flex-end' alignItems='center' columnGap='.2rem'>
                        <MotionConfig whileTap={{ scale:1 }} whileHover={{ scale:1.05 }}>
                            <motion.div>
                                <LoadingButton
                                    loading={reviewStatus === 'pending'}
                                    type='submit'
                                    variant='contained'
                                    sx={{ textTransform:"none", fontSize:is480?"":"1rem" }}
                                >
                                    Thêm đánh giá
                                </LoadingButton>
                            </motion.div>

                            <motion.div>
                                <Button
                                    onClick={() => setWriteReview(false)}
                                    color='error'
                                    variant='outlined'
                                    sx={{ textTransform:"none", fontSize:is480?"":"1rem" }}
                                >
                                    Hủy
                                </Button>
                            </motion.div>
                        </MotionConfig>
                    </Stack>
                </Stack>
            ) : (
                !loggedInUser?.isAdmin && (
                    <motion.div onClick={() => setWriteReview(true)} whileHover={{ scale:1.05 }} whileTap={{ scale:1 }}>
                        <Button 
                            variant='contained'
                            disableElevation
                            size={is480 ? "medium" : "large"}
                            sx={{ textTransform:"none", fontSize:"1rem", borderRadius:'6px' }}
                            startIcon={<CreateIcon />}
                        >
                            Viết đánh giá
                        </Button>
                    </motion.div>
                )
            )}

        </Stack>
    );
};
