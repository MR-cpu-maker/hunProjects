package com.app.moviehun.Adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.app.moviehun.Domains.Cast;
import com.app.moviehun.R;
import com.bumptech.glide.Glide;

import java.lang.reflect.Array;
import java.util.ArrayList;

public class CastList extends RecyclerView.Adapter<CastList.Viewholder> {
    ArrayList<Cast>casts;
    Context context;

    public CastList(ArrayList<Cast> casts) {
        this.casts = casts;
    }

    @NonNull
    @Override
    public CastList.Viewholder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
       context=parent.getContext();
       View inflate = LayoutInflater.from(parent.getContext()).inflate(R.layout.actor_viewholder,parent,false);
       return new Viewholder(inflate);
    }

    @Override
    public void onBindViewHolder(@NonNull CastList.Viewholder holder, int position) {
        Glide.with(context)
                .load(casts.get(position).getPicUrl())
                .into(holder.pic);

        holder.nameTxt.setText(casts.get(position).getActor());

    }

    @Override
    public int getItemCount() {
        return casts.size();
    }

    public class Viewholder extends RecyclerView.ViewHolder {
        ImageView pic;
        TextView nameTxt;

        public Viewholder(@NonNull View itemView) {
            super(itemView);
            pic=itemView.findViewById(R.id.itemImg);
            nameTxt=itemView.findViewById(R.id.nameTxt);

        }
    }
}
