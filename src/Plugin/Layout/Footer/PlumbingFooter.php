<?php

namespace Drupal\just_mod\Plugin\Layout\Footer;

use Drupal\Core\Layout\LayoutDefault;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "PlumbingFooter",
 *   label = @Translation("Plumbing footer section"),
 *   category = @Translation("Plumbing Layout"),
 *   path = "layouts/footer",
 *   template = "plumbing_footer",
 *   library = "just_mod/plumbing_footer",
 * )
 */
class PlumbingFooter extends FormatageModelsSection
{
    /**
     *
     * {@inheritdoc}
     */
    public function defaultConfiguration()
    {
        return parent::defaultConfiguration();
    }
}
