      private void startBallAnimation() {&#xD;&#xA;            final TranslateAnimation animation = new TranslateAnimation(&#xD;&#xA;                    TranslateAnimation.RELATIVE_TO_PARENT, 0.0f,&#xD;&#xA;                    TranslateAnimation.RELATIVE_TO_PARENT, 0.0f,&#xD;&#xA;                    TranslateAnimation.RELATIVE_TO_PARENT, 0.0f,&#xD;&#xA;                    TranslateAnimation.RELATIVE_TO_PARENT, 0.86f&#xD;&#xA;            );&#xD;&#xA;            animation.setAnimationListener(new Animation.AnimationListener() {&#xD;&#xA;                @Override&#xD;&#xA;                public void onAnimationStart(Animation animation) {&#xD;&#xA;                    mhandle.post(new Runnable() {&#xD;&#xA;                        @Override&#xD;&#xA;                        public void run() {&#xD;&#xA;                            setBallColors();&#xD;&#xA;                        }&#xD;&#xA;                    });&#xD;&#xA;                }&#xD;&#xA;                @Override&#xD;&#xA;                public void onAnimationRepeat(Animation animation) {}&#xD;&#xA;                @Override&#xD;&#xA;                public void onAnimationEnd(final Animation animation) {}