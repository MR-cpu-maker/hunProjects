package com.app.moviehun.Adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;
import androidx.viewpager2.widget.ViewPager2;

import com.app.moviehun.Domains.Slider;
import com.app.moviehun.R;
import com.bumptech.glide.Glide;
import com.bumptech.glide.load.resource.bitmap.CenterCrop;
import com.bumptech.glide.load.resource.bitmap.RoundedCorners;
import com.bumptech.glide.request.RequestOptions;

import java.util.List;

public class SlidersAdapter extends RecyclerView.Adapter<SlidersAdapter.SliderViewholder> {
    private final List<Slider> sliderList;
    private ViewPager2 viewPager2;
    private Context context;

    public SlidersAdapter(List<Slider> sliderList, ViewPager2 viewPager2) {
        this.sliderList = sliderList;
        this.viewPager2 = viewPager2;
    }

    @NonNull
    @Override
    public SliderViewholder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        context = parent.getContext();
        return new SliderViewholder(LayoutInflater.from(parent.getContext()).inflate(R.layout.slider, parent, false));
    }

    @Override
    public void onBindViewHolder(@NonNull SliderViewholder holder, int position) {
        holder.setImage(sliderList.get(position));
        sliderList.size();// You can handle prefetching or pagination here, but ensure it’s not adding data indefinitely
    }

    @Override
    public int getItemCount() {
        return sliderList.size();
    }

    public void setViewPager2(ViewPager2 viewPager2) {
        this.viewPager2 = viewPager2;
    }

    public class SliderViewholder extends RecyclerView.ViewHolder {
        private final ImageView imageView;
        private final TextView nameTxt;
        private final TextView genreTxt;
        private final TextView ageTxt;
        private final TextView yearTxt;
        private final TextView timeTxt;

        public SliderViewholder(@NonNull View itemView) {
            super(itemView);
            imageView = itemView.findViewById(R.id.imageSlider);
            nameTxt = itemView.findViewById(R.id.nameTxt);
            genreTxt = itemView.findViewById(R.id.genreTxt);
            ageTxt = itemView.findViewById(R.id.ageTxt);
            yearTxt = itemView.findViewById(R.id.yearTxt);
            timeTxt = itemView.findViewById(R.id.timeTxt);
        }

        void setImage(Slider slider) {
            RequestOptions requestOptions = new RequestOptions()
                    .transform(new CenterCrop(), new RoundedCorners(60));
            Glide.with(context)
                    .load(slider.getImage())
                    .apply(requestOptions)
                    .into(imageView);

            nameTxt.setText(slider.getName());
            genreTxt.setText(slider.getGenre());
            ageTxt.setText(slider.getAge());
            yearTxt.setText(String.valueOf(slider.getYear()));
            timeTxt.setText(slider.getTime());
        }
    }
}
