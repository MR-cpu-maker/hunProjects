package com.app.moviehun.Adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.app.moviehun.R;

import java.util.List;

public class CategoryEachFilm extends RecyclerView.Adapter<CategoryEachFilm.Viewholder> {
    List<String> items;
    Context context;
    public CategoryEachFilm(List<String> items) {
        this.items = items;

    }

    @NonNull
    @Override
    public CategoryEachFilm.Viewholder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        context= parent.getContext();
        View inflate = LayoutInflater.from(parent.getContext()).inflate(R.layout.category_viewholder,parent,false);
        return new Viewholder(inflate);
    }

    @Override
    public void onBindViewHolder(@NonNull CategoryEachFilm.Viewholder holder, int position) {
holder.titleTxt.setText(items.get(position));
    }

    @Override
    public int getItemCount() {
        return items.size();
    }

    public class Viewholder extends RecyclerView.ViewHolder {

        TextView titleTxt;
        public Viewholder(@NonNull View itemView) {
            super(itemView);
            titleTxt=itemView.findViewById(R.id.titleTxt);
        }
    }
}
