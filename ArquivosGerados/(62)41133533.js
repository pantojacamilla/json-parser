    <?php&#xD;&#xA;    namespace App\Models;&#xD;&#xA;    use Illuminate\Database\Eloquent\Model;&#xD;&#xA;    class ListingFeatureValue extends Model&#xD;&#xA;    {&#xD;&#xA;        protected $table = 'listings_features_values';&#xD;&#xA;        public $timestamps = false;&#xD;&#xA;        public $incrementing = false;&#xD;&#xA;        public function type() {&#xD;&#xA;            return $this->belongsTo('App\Models\ListingFeatureType', 'listing_feature_type_id', 'id');&#xD;&#xA;        }&#xD;&#xA;    }