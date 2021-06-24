    package com.example.muhammadjahanzeb.ueve1;&#xD;&#xA;    import android.content.Context;&#xD;&#xA;    import android.graphics.Bitmap;&#xD;&#xA;    import android.graphics.drawable.Drawable;&#xD;&#xA;    import android.os.Environment;&#xD;&#xA;    import android.view.LayoutInflater;&#xD;&#xA;    import android.view.View;&#xD;&#xA;    import android.view.ViewGroup;&#xD;&#xA;    import android.widget.BaseAdapter;&#xD;&#xA;    import android.widget.Button;&#xD;&#xA;    import android.widget.ImageView;&#xD;&#xA;    import android.widget.TextView;&#xD;&#xA;    import android.widget.Toast;&#xD;&#xA;    import com.nostra13.universalimageloader.core.ImageLoader;&#xD;&#xA;    import com.nostra13.universalimageloader.core.assist.FailReason;&#xD;&#xA;    import com.nostra13.universalimageloader.core.listener.ImageLoadingListener;&#xD;&#xA;    import com.squareup.picasso.Picasso;&#xD;&#xA;    import com.squareup.picasso.Target;&#xD;&#xA;    import java.io.File;&#xD;&#xA;    import java.io.FileOutputStream;&#xD;&#xA;    import java.util.Date;&#xD;&#xA;    import java.util.List;&#xD;&#xA;    /**&#xD;&#xA;     * Created by Haider885 on 23/11/2016.&#xD;&#xA;     */&#xD;&#xA;    class HomeEventListAdapter extends BaseAdapter {&#xD;&#xA;        public static String fileName;&#xD;&#xA;        private class ViewHolder {&#xD;&#xA;            TextView eventName;&#xD;&#xA;            ImageView eventImageView;&#xD;&#xA;            Button downloadButton;&#xD;&#xA;        }&#xD;&#xA;        public Context getContext() {&#xD;&#xA;            return context;&#xD;&#xA;        }&#xD;&#xA;        public void setContext(Context context) {&#xD;&#xA;            this.context = context;&#xD;&#xA;        }&#xD;&#xA;        public Context context;;&#xD;&#xA;        private List<String> eventName,eventImages;&#xD;&#xA;        //  private List<Bitmap> images;&#xD;&#xA;        HomeEventListAdapter(Context context, List<String> eventName, List<String> eventImages) {&#xD;&#xA;            this.context = context;&#xD;&#xA;            this.eventName = eventName;&#xD;&#xA;            this.eventImages = eventImages;&#xD;&#xA;        }&#xD;&#xA;        HomeEventListAdapter(Context context) {&#xD;&#xA;            this.context = context;&#xD;&#xA;        }&#xD;&#xA;        @Override&#xD;&#xA;        public int getCount() {&#xD;&#xA;            return eventName.size();&#xD;&#xA;        }&#xD;&#xA;        @Override&#xD;&#xA;        public Object getItem(int i) {&#xD;&#xA;            return eventName.get(i);&#xD;&#xA;        }&#xD;&#xA;        @Override&#xD;&#xA;        public long getItemId(int i) {&#xD;&#xA;            return i;&#xD;&#xA;        }&#xD;&#xA;        @Override&#xD;&#xA;        public View getView(final int i, View view, ViewGroup viewGroup) {&#xD;&#xA;            final ViewHolder holder;&#xD;&#xA;            if(view==null)&#xD;&#xA;            {&#xD;&#xA;                LayoutInflater inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);&#xD;&#xA;                view= inflater.inflate(R.layout.custom_home_card,null);&#xD;&#xA;                holder= new ViewHolder();&#xD;&#xA;                holder.eventName = (TextView)view.findViewById(R.id.homeEventName);&#xD;&#xA;                holder.eventImageView = (ImageView)view.findViewById(R.id.homeEventImage);&#xD;&#xA;                holder.downloadButton = (Button)view.findViewById(R.id.btnImageDownload);&#xD;&#xA;                view.setTag(holder);&#xD;&#xA;            }&#xD;&#xA;            else&#xD;&#xA;            {&#xD;&#xA;                holder=(ViewHolder)view.getTag();&#xD;&#xA;            }&#xD;&#xA;            holder.eventName.setText(eventName.get(i));&#xD;&#xA;            fileName = holder.eventName.getText().toString();&#xD;&#xA;           holder.downloadButton.setOnClickListener(new View.OnClickListener() {&#xD;&#xA;                @Override&#xD;&#xA;                public void onClick(View view) {&#xD;&#xA;                    //new DownloadFile().execute(eventImages.get(i));&#xD;&#xA;                    Context context1 = getContext();&#xD;&#xA;                    Toast.makeText(getContext(),"Clicked",Toast.LENGTH_SHORT);&#xD;&#xA;                    //String imageUrl = eventImages.get(i);&#xD;&#xA;                    //new DownloadFileFromURL().execute(imageUrl);&#xD;&#xA;                  //  downloadImage(imageUrl);&#xD;&#xA;                  //  Toast.makeText(context,"Downloaded",Toast.LENGTH_SHORT);&#xD;&#xA;                }&#xD;&#xA;            });&#xD;&#xA;            /*====== Setting image to image view with ImageLoader ========*/&#xD;&#xA;            /*========================================================*/&#xD;&#xA;       ImageLoader.getInstance().displayImage(eventImages.get(i), holder.eventImageView, new ImageLoadingListener() {&#xD;&#xA;                @Override&#xD;&#xA;                public void onLoadingStarted(String imageUri, View view) {&#xD;&#xA;                   // Toast.makeText(view.getContext(),imageUri+" started",Toast.LENGTH_LONG).show();&#xD;&#xA;                }&#xD;&#xA;                @Override&#xD;&#xA;                public void onLoadingFailed(String imageUri, View view, FailReason failReason) {&#xD;&#xA;                    //Toast.makeText(view.getContext(), String.format("%s%s", imageUri, failReason.getCause()),Toast.LENGTH_LONG).show();&#xD;&#xA;                }&#xD;&#xA;                @Override&#xD;&#xA;                public void onLoadingComplete(String imageUri, View view, Bitmap loadedImage) {&#xD;&#xA;                    //Toast.makeText(view.getContext(),imageUri+" complete",Toast.LENGTH_LONG).show();&#xD;&#xA;                    //123 holder.imageView.setImageBitmap(loadedImage);&#xD;&#xA;                }&#xD;&#xA;                @Override&#xD;&#xA;                public void onLoadingCancelled(String imageUri, View view) {&#xD;&#xA;                   // Toast.makeText(view.getContext(),imageUri+" cancelled",Toast.LENGTH_LONG).show();&#xD;&#xA;                }&#xD;&#xA;            });&#xD;&#xA;            /*====== Setting image to image view with ImageLoader ========*/&#xD;&#xA;            /*========================================================*/&#xD;&#xA;            return view;&#xD;&#xA;        }&#xD;&#xA;        &#xD;&#xA;        public void downloadImage(String url)&#xD;&#xA;        {&#xD;&#xA;            Picasso.with(context)&#xD;&#xA;                    .load(url)&#xD;&#xA;                    .into(new Target() {&#xD;&#xA;                              @Override&#xD;&#xA;                              public void onBitmapLoaded(Bitmap bitmap, Picasso.LoadedFrom from) {&#xD;&#xA;                                  try {&#xD;&#xA;                                      String root = Environment.getExternalStorageDirectory().toString();&#xD;&#xA;                                      File myDir = new File(root + "/yourDirectory");&#xD;&#xA;                                      if (!myDir.exists()) {&#xD;&#xA;                                          myDir.mkdirs();&#xD;&#xA;                                      }&#xD;&#xA;                                      String name = new Date().toString() + ".jpg";&#xD;&#xA;                                      myDir = new File(myDir, name);&#xD;&#xA;                                      FileOutputStream out = new FileOutputStream(myDir);&#xD;&#xA;                                      bitmap.compress(Bitmap.CompressFormat.JPEG, 90, out);&#xD;&#xA;                                      out.flush();&#xD;&#xA;                                      out.close();&#xD;&#xA;                                  } catch(Exception e){&#xD;&#xA;                                      // some action&#xD;&#xA;                                  }&#xD;&#xA;                              }&#xD;&#xA;                              @Override&#xD;&#xA;                              public void onBitmapFailed(Drawable errorDrawable) {&#xD;&#xA;                              }&#xD;&#xA;                              @Override&#xD;&#xA;                              public void onPrepareLoad(Drawable placeHolderDrawable) {&#xD;&#xA;                              }&#xD;&#xA;                          }&#xD;&#xA;                    );&#xD;&#xA;        }&#xD;&#xA;    }